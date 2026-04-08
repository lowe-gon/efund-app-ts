import { Label, TextField } from 'heroui-native';
import React from 'react';

export default function Input() {
  return (
    <>
      <TextField>
        <Label className="font-quicksand">Heallo</Label>
        <Input />
      </TextField>
    </>
  );
}
