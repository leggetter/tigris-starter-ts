import {
  TigrisCollectionType,
  TigrisDataTypes,
  TigrisSchema,
} from "@tigrisdata/core/dist/types";

export interface User extends TigrisCollectionType {
  userId?: string;
  name: string;
  balance: number;
}

export const userSchema: TigrisSchema<User> = {
  userId: {
    type: TigrisDataTypes.INT64,
    primary_key: {
      order: 1,
      autoGenerate: true,
    },
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  balance: {
    type: TigrisDataTypes.NUMBER,
  },
};
