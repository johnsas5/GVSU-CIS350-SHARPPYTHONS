import React from "react";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function addKeys(d) {
  var newobj = [];
  for (let key in d){
    if (key != "age" && key != "cur_savings" && key != "expenses" &&
    key != "firstName" && key != "lastName" && key != "income" && key != "retirement_year"){
      let test = { category:key, value:Number(d[key]) };
      newobj.push(test);
    }
  }
  console.log("test savings graph: " + JSON.stringify(newobj));
  return newobj;
}

function SavingsGraph({dataIn}) {
  const data = addKeys(dataIn).sort((a, b) => b.value - a.value);;
  // const data = [
  //   { name: "Housing", value: 50 },
  //   { name: "Utilities", value: 25 },
  //   { name: "Transportation", value: 150 },
  //   { name: "Food", value: 300 },
  //   { name: "Debt", value: 200 },
  //   { name: "Insurance", value: 190 },
  //   { name: "Health", value: 70 },
  //   { name: "Entertainment", value: 225 },
  //   { name: "Education", value: 125 },
  //   { name: "Investments", value: 322 },
  //   { name: "FamilyExpenses", value: 100 },
  //   { name: "Other", value: 0 },
  // ];

  const margin = { top: 0, right: 100, bottom: 80, left: 100 };
  const width = 650 - margin.left - margin.right;
  const height = 390 - margin.top - margin.bottom;
  const svgRef = useRef();
  useEffect(() => {
    // Create SVG container
    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, width])
      .padding(0.05);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Create bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.category))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("transform", "translate(30, 0)")
      .attr("fill", "steelblue");

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(30,${height})`)
      .call(xAxis)
      .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "translate(-10,0)rotate(-45)");

    // Create y-axis
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(30, 0)")
      .call(yAxis);

  }, [data, height, width]);

  return (
    <svg
      ref={svgRef}
      style={{ padding: "20px" }}
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    ></svg>
  );
}

export default SavingsGraph;
