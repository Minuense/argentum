using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Models.Apod
{
    public class Camera
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("full_name")]
        public string Full_name { get; set; }

        [JsonProperty("rover_id")]
        public int Rover_id { get; set; }
    }
}
