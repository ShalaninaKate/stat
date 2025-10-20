export default function (plop) {
plop.setHelper("uiFolder", function (target) {
  return target === "src/widgets" ? "ui/" : "";
});

plop.setHelper("uiPath", function (target) {
  // используем встроенный pascalCase helper
  const pascalName = plop.getHelper("pascalCase")(this.name);
  return target === "src/widgets" ? `./ui/${pascalName}` : `./${pascalName}`;
});


  plop.setGenerator("component", {
    description: "Создать React UI компонент",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "list",
        name: "target",
        message: "Where should the component be created?",
        choices: [
          { name: "Shared", value: "src/shared/ui" },
          { name: "Widgets", value: "src/widgets" },
        ],
      },
    ],
    actions: [
      {
        type: "add",

        path: "{{target}}/{{camelCase name}}/{{uiFolder target}}{{pascalCase name}}.tsx",

        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "{{target}}/{{camelCase name}}/{{uiFolder target}}{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/component.module.scss.hbs",
      },
      {
        type: "add",
        path: "{{target}}/{{camelCase name}}/index.ts",
        templateFile: "plop-templates/index.ts.hbs",
      },
    ],
  });
}
