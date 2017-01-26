import Feature = GeoJSON.Feature;
import FeatureCollection = GeoJSON.FeatureCollection;
import GeometryObject = GeoJSON.GeometryObject;

export interface GenericGeoJSONFeature<G extends GeometryObject, T> extends Feature<G> {
    properties: T;
}

export interface GenericGeoJSONFeatureCollection<G extends GeometryObject, T> extends FeatureCollection<G> {
    features: GenericGeoJSONFeature<G, T>[];
}
