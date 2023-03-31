import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function RingGraph() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const radius = Math.min(width, height) / 2 - 10;

    const data = [25, 25, 25, 25];

    const color = d3
      .scaleOrdinal()
      .domain([0, data.length - 1])
      .range(['#FFC107', '#2196F3', '#4CAF50', '#9C27B0']);

    const pie = d3.pie().value((d) => d);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.7)
      .outerRadius(radius);

    const path = svg
      .selectAll('path')
      .data(pie(data))
      .join('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    const text = svg
      .selectAll('text')
      .data(pie(data))
      .join('text')
      .text((d) => `${d.data}%`)
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '2rem')
      .attr('font-weight', 'bold')
      .attr('fill', '#FFFFFF');

    const animate = () => {
      data.push(data.shift());

      path
        .data(pie(data))
        .transition()
        .duration(1000)
        .attr('d', arc);

      text
        .data(pie(data))
        .transition()
        .duration(1000)
        .attr('transform', (d) => `translate(${arc.centroid(d)})`);
    };

    setInterval(animate, 2000);

    return () => clearInterval(animate);
  }, []);

  return <svg ref={svgRef}></svg>;
}

export default RingGraph;
