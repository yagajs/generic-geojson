# Generic GeoJSON type definition

This is just a type definition and an enhancement of the 
[original GeoJSON type definition](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/geojson) for 
[TypeScript](http://www.typescriptlang.org/).

You can use this definition to handle [generic](https://www.typescriptlang.org/docs/handbook/generics.html)
[properties of features](http://geojson.org/geojson-spec.html#feature-objects) in [GeoJSON](http://geojson.org/).

## How to use

Just install this definition with:

```bash
npm install --save @yaga/generic-geojson
```

and import into your TypeScript source:

```typescript
import { GenericGeoJSONFeature, GenericGeoJSONFeatureCollection } from '@yaga/generic-geojson';
```

## Background

The specification of GeoJSON allows every data type for the `properties` property.
In lots of use-cases you want to specify the properties to a special (generic) one.
With this definition you are able to do so.

## Example

Every GeoJSON is compatible to the generic one with the `any` type:

```typescript

import OriginalFeature = GeoJSON.Feature;
import GeometryObject = GeoJSON.GeometryObject;
import { GenericGeoJSONFeature } from '@yaga/generic-geojson';

let aFeature: OriginalFeature<GeometryObject> = {
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

// This is valid!
let aGenericFeatureWithAny: GenericGeoJSONFeature<GeometryObject, any> = aFeature;

```

The first generic have the same meaning like the one from the original GeoJSON definition.
Additionally you are able to specify the `properties` more precise with the second generic:

```typescript

import GeometryObject = GeoJSON.GeometryObject;
import { GenericGeoJSONFeature } from '@yaga/generic-geojson';

interface TestInterface {
    just: boolean;
    specific: string;
    properties?: number;
}

let aSpecifiedFeature: GenericGeoJSONFeature<GeometryObject, TestInterface> = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [1, 2]
    },
    // properties must fulfill the TestInterface!
    properties: {
       just: true,
       specific: '',
       properties: 123
    }
};

```

The same for `FeatureCollection`s:

```typescript

import GeometryObject = GeoJSON.GeometryObject;
import { GenericGeoJSONFeature, GenericGeoJSONFeatureCollection } from '@yaga/generic-geojson';

interface TestInterface {
    just: boolean;
    specific: string;
    properties: number;
}

let aSpecifiedFeature: GenericGeoJSONFeature<GeometryObject, TestInterface> = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [1, 2]
    },
    properties: {
       just: true,
       specific: '',
       properties: 123
    }
};

// Same meaning for FeatureCollections:
let aSpecificFeatureCollection: GenericGeoJSONFeatureCollection<GeometryObject, TestInterface> = {
    type: 'FeatureCollection',
    features: [ aSpecifiedFeature ]
}

```