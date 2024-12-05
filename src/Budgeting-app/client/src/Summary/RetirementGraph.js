import React from "react";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function addKeys(d) {
  var newobj = [];
  for (let key in d){
    let test = { year:Number(key), value:Number(d[key]) };
    newobj.push(test);
  }
  console.log(JSON.stringify(newobj));
  return newobj;
}

function RetirementGraph({dataIn}) {
  const data = addKeys(dataIn);
  // const data = [
  //   { age: 20, value: 50 },
  //   { age: 25, value: 55 },
  //   { age: 30, value: 85 },
  //   { age: 35, value: 108 },
  //   { age: 40, value: 143 },
  //   { age: 45, value: 201 },
  //   { age: 50, value: 269 },
  //   { age: 55, value: 351 },
  //   { age: 60, value: 482 },
  //   { age: 65, value: 685 },
  // ];

  const margin = { top: 0, right: 100, bottom: 80, left: 100 };
  const width = 650 - margin.left - margin.right;
  const height = 380 - margin.top - margin.bottom;
  const svgRef = useRef();
  useEffect(() => {
    // Create SVG container
    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.value));


    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line)
      .attr("transform", "translate(50, 10)");

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(50,${height + 10})`)
      .call(xAxis);

    // Create y-axis
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(50, 10)")
      .call(yAxis);

  }, [data, height, width]);

  return (
    <svg ref={svgRef}
      style={{ padding: "20px" }}
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    ></svg>
  );
}

export default RetirementGraph;
