function buildMetadata(sample) {


//  var url = `/metadata/${sample}`;
  var url = "/metadata/"+sample;

  d3.json("/metadata/" + sample).then(function(data){
    var metadata = d3.select("#sample-metadata");
    metadata.html("")
    metadata.append("p").text("SAMPLEID: " + data["sample"]);

  // there are like a dozen ways to do this


    Object.entries(sample).forEach(function ([key, value]) {
      var row = sample-metadata.append("p");
      row.text(`${key}: ${value}`);
});
  }
)};


function buildCharts(sample) {
  var url = "/samples/"+{sample};
  d3.json(url).then(function(data) { 
// is that redundant? 
    var pieText = data.otu_labels.slice(0,10);
    var pieID = data.otu_ids.slice(0,10);
    var pieX = data.sample_values.slice(0,10);
    var pieText = data.otu_labels.slice(0,10);
    var pieData = [{
      values: pieX, 
      labels: piID,
      hovertext: pieText, 
      type: 'pie'
    }]; 
    Plotly.newPlot('pie', pieData); 
  }};
};


  d3.json(url).then(function(data) {

    var trace2 = { 
      x: data.otu_ids, 
      y: data.sample_values, 
      text: data.otu_labels, 
      hovertext: data.otu_labels, 
      mode: 'markers+text', 
      marker: { 
        color: data.otu_ids, 
        size: data.sample_values, 
        symbol: 'circle', 
        markerposition: 'inside'}
    },
    layout = { 
      hovermode: closest, 
      xaxis: {title: {text: 'OTU ID'},
      yaxis: {title: {text: 'SAMPLE VALUES'}, 
    },
    Plotly:newPlot('trace2', bubble, layout);
  }};
};
