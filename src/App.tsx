import { Segmented } from 'antd';
import { useState } from 'react';
import { SEGMENTS } from './constants';
import { PasswordCustom } from './modules/PasswordCustom';
import { PasswordMeter } from './modules/PasswordMeter';

export const App = () => {
  const [selectedSegment, setSelectedSegment] = useState(SEGMENTS[0]);

  return (
    <div className="App">
      <Segmented
        options={SEGMENTS}
        onChange={(value) => setSelectedSegment(value)}
        className="Segmented"
      />
      {selectedSegment === SEGMENTS[0] ? <PasswordMeter /> : <PasswordCustom />}
    </div>
  );
};
