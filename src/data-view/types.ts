type DefaultDataType = {
  id: number;
  title: string;
};

type MemeDataType = {
  name: string;
  url: string;
};

export type DataType = MemeDataType;

export interface DataViewProps {
  data: DataType[];
}
