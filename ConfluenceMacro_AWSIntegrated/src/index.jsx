import ForgeUI, { render, Fragment, Macro, Text, MacroConfig, TextField, useConfig } from "@forge/ui";

const App = () => {
  const config = useConfig() || defaultConfig;

  return (
    <Fragment>
      <Text>Configured field is {config.field}</Text>
    </Fragment>
  );
};

const defaultConfig = {
  name: "some field"
};


const Config = () => {
  return(
    <MacroConfig>
      <TextField name="field" label="fieldLabel" />
    </MacroConfig>
  );
};


export const run = render(<Macro app={<App />} />);
export const config = render(<Config />);