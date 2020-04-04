import React from "react";

import { ReactComponent as GoIcon } from "Assets/stacks/go.svg";
import { ReactComponent as JSIcon } from "Assets/stacks/js.svg";
import { ReactComponent as BashIcon } from "Assets/stacks/bash.svg";
import { ReactComponent as CIcon } from "Assets/stacks/c.svg";
import { ReactComponent as CppIcon } from "Assets/stacks/cpp.svg";
import { ReactComponent as CSSIcon } from "Assets/stacks/css.svg";
import { ReactComponent as DockerIcon } from "Assets/stacks/docker.svg";
import { ReactComponent as HerokuIcon } from "Assets/stacks/heroku.svg";
import { ReactComponent as HtmlIcon } from "Assets/stacks/html.svg";
import { ReactComponent as JavaIcon } from "Assets/stacks/java.svg";
import { ReactComponent as MongoIcon } from "Assets/stacks/mongo.svg";
import { ReactComponent as MysqlIcon } from "Assets/stacks/mysql.svg";
import { ReactComponent as NodejsIcon } from "Assets/stacks/nodejs.svg";
import { ReactComponent as PhpIcon } from "Assets/stacks/php.svg";
import { ReactComponent as PythonIcon } from "Assets/stacks/python.svg";
import { ReactComponent as ReactIcon } from "Assets/stacks/react.svg";
import { ReactComponent as SaasIcon } from "Assets/stacks/saas.svg";
import { ReactComponent as WebpackIcon } from "Assets/stacks/webpack.svg";

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
