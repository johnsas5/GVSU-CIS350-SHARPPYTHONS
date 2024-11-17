import React from "react";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function SavingsGraph() {
  const data = [
    { name: "housing", value: 50 },
    { name: "utilities", value: 25 },
    { name: "transportation", value: 150 },
    { name: "food", value: 300 },
    { name: "debt", value: 200 },
    { name: "insurance", value: 190 },
    { name: "health", value: 70 },
    { name: "entertainment", value: 225 },
    { name: "education", value: 125 },
    { name: "investments", value: 322 },
    { name: "familyExpenses", value: 100 },
    { name: "other", value: 0 },
  ];

  const margin = { top: 0, right: 100, bottom: 80, left: 100 };
  const width = 680 - margin.left - margin.right;
  const height = 380 - margin.top - margin.bottom;
  const svgRef = useRef();
  useEffect(() => {
    // Create SVG container
    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
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
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("transform", "translate(30, 10)")
      .attr("fill", "steelblue");

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(20,${height + 10})`)
      .call(xAxis)
      .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("fill", "#000");

    // Create y-axis
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(30, 10)")
      .call(yAxis)
      .selectAll("text")
      .attr("fill", "#000");

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
