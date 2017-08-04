using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

using System.Linq;
using Services.Models.Apod;
using Newtonsoft.Json;

namespace Services
{
    public class ApodService
    {
        public ApodService()
        {
        }

        public async Task<JsonPhotos> GetLatestImage()
        {
            try
            {
                //response obj
                JsonPhotos retVal = new JsonPhotos();

                var client = new NasaApodClient();                

                //get seed data
                var response = await client.GetAsync();
                if (response.IsSuccessStatusCode)
                {
                    //if it succeeds, deserialize seed data
                    var seedJson = await response.Content.ReadAsStringAsync();
                    var seedJsonPhotos = JsonConvert.DeserializeObject<JsonPhotos>(seedJson);
                    if (seedJsonPhotos != null)
                    {
                        //if THAT succeeds, grab the rover metadata from any of the objects in the response list
                        var rover = seedJsonPhotos.Photos.FirstOrDefault().Rover;
                        
                        //now we can use the rover metadata to grab latest
                        var maxSol = rover.Max_sol;
                        var randomCamera = rover.Cameras.OrderBy(r => Guid.NewGuid()).FirstOrDefault().Name;

                        //do a second fetch, this time for latest images from the random camera
                        var latestResponse = await client.GetAsync(maxSol, randomCamera);
                        if (latestResponse.IsSuccessStatusCode)
                        {
                            //if it succeeds, deserialize and slap it on the response
                            var responseJson = await latestResponse.Content.ReadAsStringAsync();
                            var responseJsonPhotos = JsonConvert.DeserializeObject<JsonPhotos>(responseJson);
                            if (responseJsonPhotos != null)
                            {
                                retVal = responseJsonPhotos;
                            }
                        }
                    }                    
                }
                return retVal;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        
    }
}
