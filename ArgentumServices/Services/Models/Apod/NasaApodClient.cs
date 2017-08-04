using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.Apod
{
    public class NasaApodClient : HttpClient
    {
        private HttpClient _client;
        private string _uri;
        private string _sol;
        private string _apiKey = "7phZCTQahUxf6mozRCC3nN7AxeZXZNtWOyQv3TT5";
        private string _camera;

        public NasaApodClient()
        {
            _client = new HttpClient();
            _client.DefaultRequestHeaders.Accept.Clear();
            _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            _uri = GenerateUri();            
        }

        public async Task<HttpResponseMessage> GetAsync()
        {
            return await _client.GetAsync(_uri);
        }

        public async Task<HttpResponseMessage> GetAsync(string sol = null, string camera = null)
        {
            var newUri = GenerateUri(sol, camera);
            return await _client.GetAsync(newUri);
        }

        private string GenerateUri()
        {
            string s = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
            s += "sol=" + 1100;
            s += "&camera=fhaz";
            s += "&api_key=" + _apiKey;

            return s;
        }

        private string GenerateUri(string sol = null, string camera = null)
        {
            string s = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
            s += "sol=" + sol;
            s += "&camera=" + camera;
            s += "&api_key=" + _apiKey;

            return s;
        }
    }
}
