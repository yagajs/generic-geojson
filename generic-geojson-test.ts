import { GenericGeoJSONFeature, GenericGeoJSONFeatureCollection } from './index'

interface TestInterface {
    test: string;
}

let anyGenericGeoJSONFeature: GenericGeoJSONFeature<GeoJSON.GeometryObject, any> = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [1, 2]
    },
    properties: {
        all: 'should',
        be: true
    }
};

let originalGeoJSONFeature: GeoJSON.Feature<GeoJSON.GeometryObject> = anyGenericGeoJSONFeature;

let specificGenericGeoJSONFeature: GenericGeoJSONFeature<GeoJSON.GeometryObject, TestInterface> = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [1, 2]
    },
    properties: {
        test: 'OK'
    }
};

let anyGenericGeoJSONFeatureCollection: GenericGeoJSONFeatureCollection<GeoJSON.GeometryObject, any> = {
    type: 'FeatureCollection',
    features: [anyGenericGeoJSONFeature, originalGeoJSONFeature, specificGenericGeoJSONFeature]
};

let originalGeoJSONFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.GeometryObject> = anyGenericGeoJSONFeatureCollection;

let specificGenericGeoJSONFeatureCollection: GenericGeoJSONFeatureCollection<GeoJSON.GeometryObject, TestInterface> = {
    type: 'FeatureCollection',
    features: [specificGenericGeoJSONFeature]
};
