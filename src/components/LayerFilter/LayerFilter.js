import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

const LayerFilter = (props) => {
  return (
    <LayersControl position='topright'>
      <LayersControl.BaseLayer checked name='OpenStreetMap.Mapnik'>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='OpenStreetMap BlackAndWhite'>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png' />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='OpenStreetMap Cycle'>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://tile.thunderforest.com/cycle/{z}/{x}/{y}.png' />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='OpenStreetMap WaterColors'>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.png' />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
};

export default LayerFilter;
