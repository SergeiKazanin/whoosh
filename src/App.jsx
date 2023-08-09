import React from "react";

import { Head } from "./components/Whoosh/Head";
import { Pad } from "./components/Whoosh/Pad";
import { Info } from "./components/Whoosh/Info";
import { Separator } from "./components/Whoosh/Separator";
import { Partners } from "./components/Whoosh/Partners";
import { Intro } from "./components/Whoosh/Intro";
import { Partners2 } from "./components/Whoosh/Partners2";

export default function App() {
  return (
    <div>
      <Head />
      <Pad />
      <Info />
      <Separator />
      <Partners />
      <Intro />
      <Partners2 />
      <Separator />
    </div>
  );
}
