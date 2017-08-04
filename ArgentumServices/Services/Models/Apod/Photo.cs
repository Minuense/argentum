using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Models.Apod
{
    public class Photo
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("img_src")]
        public string ImgSource { get; set; }

        [JsonProperty("earth_date")]
        public DateTime Earth_date { get; set; }

        [JsonProperty("sol")]
        public string Sol { get; set; }

        [JsonProperty("rover")]
        public Rover Rover { get; set; }

        [JsonProperty("camera")]
        public Camera Camera { get; set; }
    }

    public class JsonPhotos
    {
        [JsonProperty("photos")]
        public List<Photo> Photos { get; set; }
    }
}
