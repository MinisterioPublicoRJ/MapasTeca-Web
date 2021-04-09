import React from 'react';

import { SmallBadge, ThemeProvider } from './lib';

export default function App() {
  return (
    <ThemeProvider>
      <SmallBadge innerText="oi" />
    </ThemeProvider>
  );
}
