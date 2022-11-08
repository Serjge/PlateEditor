import { Plate, PlateProvider, TEditableProps } from '@udecode/plate';
import { plugins } from 'PlateEditor/plugins/plugins';
import { ToolbarButtons } from 'PlateEditor/toolbar/ToolbarButtons';
import { MyValue } from 'PlateEditor/types';
import React, { ReactElement, useRef } from 'react';
import './PlateEditor.css';

type PlateEditorType = {
  onChange?: (value: MyValue) => void;
  value?: MyValue;
  readOnly?: boolean;
  hiddenToolbar?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  spellCheck?: boolean;
  initialValue?: MyValue;
}

export const PlateEditor = (props: PlateEditorType): ReactElement => {
  const {
    value,
    onChange,
    hiddenToolbar,
    readOnly = false,
    placeholder = '',
    spellCheck = true,
    autoFocus = false,
    initialValue,
    
  } = props
  const ref = useRef<HTMLDivElement | null>(null)
  console.log(ref.current)
  const editableProps: TEditableProps<MyValue> = {
    spellCheck,
    autoFocus,
    readOnly,
    placeholder,
  };

  return (

    <PlateProvider<MyValue>
      initialValue={ initialValue }

      value={ value }
      onChange={ onChange }
      plugins={ plugins }
    >
      {!hiddenToolbar && <ToolbarButtons/> }

      <Plate<MyValue> editableRef={ref}  editableProps={ editableProps }/>
    </PlateProvider>

  );
};
