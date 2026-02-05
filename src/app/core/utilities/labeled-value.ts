export interface LabeledValue<T> {
  icon: string;
  label: string;
  value: T;
}

export interface IconedLabeledValue<T, Icon extends string> extends LabeledValue<T> {
  icon: Icon;
  label: string;
  value: T;
}
