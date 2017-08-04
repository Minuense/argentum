using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Models.Apod
{
    public class Rover
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("landing_date")]
        public DateTime Landing_date { get; set; }

        [JsonProperty("launch_date")]
        public DateTime Launch_date { get; set; }

        [JsonProperty("max_date")]
        public DateTime Max_date { get; set; }

        [JsonProperty("max_sol")]
        public string Max_sol { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("total_photos")]
        public int Total_photos { get; set; }

        [JsonProperty("cameras")]
        public List<Camera> Cameras { get; set; }
    }
}
