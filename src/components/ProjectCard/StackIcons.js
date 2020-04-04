import React from "react";

import { ReactComponent as GoIcon } from "../../assets/stacks/go.svg";
import { ReactComponent as JSIcon } from "../../assets/stacks/js.svg";
import { ReactComponent as BashIcon } from "../../assets/stacks/bash.svg";
import { ReactComponent as CIcon } from "../../assets/stacks/c.svg";
import { ReactComponent as CppIcon } from "../../assets/stacks/cpp.svg";
import { ReactComponent as CSSIcon } from "../../assets/stacks/css.svg";
import { ReactComponent as DockerIcon } from "../../assets/stacks/docker.svg";
import { ReactComponent as HerokuIcon } from "../../assets/stacks/heroku.svg";
import { ReactComponent as HtmlIcon } from "../../assets/stacks/html.svg";
import { ReactComponent as JavaIcon } from "../../assets/stacks/java.svg";
import { ReactComponent as MongoIcon } from "../../assets/stacks/mongo.svg";
import { ReactComponent as MysqlIcon } from "../../assets/stacks/mysql.svg";
import { ReactComponent as NodejsIcon } from "../../assets/stacks/nodejs.svg";
import { ReactComponent as PhpIcon } from "../../assets/stacks/php.svg";
import { ReactComponent as PythonIcon } from "../../assets/stacks/python.svg";
import { ReactComponent as ReactIcon } from "../../assets/stacks/react.svg";
import { ReactComponent as SaasIcon } from "../../assets/stacks/saas.svg";
import { ReactComponent as WebpackIcon } from "../../assets/stacks/webpack.svg";

const StackIcons = ({ stacks, ...rest }) => {
  const iconList = {
    Go: <GoIcon {...rest} />,
    JavaScript: <JSIcon {...rest} />,
    Shell: <BashIcon {...rest} />,
    Python: <PythonIcon {...rest} />,
    PHP: <PhpIcon {...rest} />,
    CSS: <CSSIcon {...rest} />,
    C: <CIcon {...rest} />,
    HTML: <HtmlIcon {...rest} />,

    React: <ReactIcon {...rest} />,
    NodeJS: <NodejsIcon {...rest} />,
    Docker: <DockerIcon {...rest} />,
    Mongo: <MongoIcon {...rest} />,
    MySQL: <MysqlIcon {...rest} />,
    Webpack: <WebpackIcon {...rest} />,
    Saas: <SaasIcon {...rest} />,
    Cpp: <CppIcon {...rest} />,
    Heroku: <HerokuIcon {...rest} />,
    Java: <JavaIcon {...rest} />,
  };

  const icons = stacks.map((s) => iconList[s]);
  return <>{icons}</>;
};

export default StackIcons;
