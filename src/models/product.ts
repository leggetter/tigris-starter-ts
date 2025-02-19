import {
  TigrisCollectionType,
  TigrisDataTypes,
  TigrisSchema,
} from "@tigrisdata/core/dist/types";

export interface Product extends TigrisCollectionType {
  productId?: string;
  name: string;
  quantity: number;
  price: number;
}

export const productSchema: TigrisSchema<Product> = {
  productId: {
    type: TigrisDataTypes.INT64,
    primary_key: {
      order: 1,
      autoGenerate: true,
    },
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  price: {
    type: TigrisDataTypes.NUMBER,
  },
  quantity: {
    type: TigrisDataTypes.INT32,
  },
};
