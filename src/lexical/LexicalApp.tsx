import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ExportPlugin } from "./plugins/ExportPlugin";
// import { TreeViewPlugin } from "./plugins/TreeViewPlugin";
import theme from "./theme";

const serializedEditorState = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 1,
            mode: "normal",
            style: "",
            text: "hello ",
            type: "text",
            version: 1,
          },
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "world",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as const;

const initialConfig: InitialConfigType = {
  namespace: "MyEditor",
  theme,
  editorState: (editor) => {
    try {
      console.log("editor mounted");

      const stringifiedSerializedEditorState = JSON.stringify(
        serializedEditorState
      );
      const initialEditorState = editor.parseEditorState(
        stringifiedSerializedEditorState
      );
      editor.setEditorState(initialEditorState);

      console.log("set editor initial state");
    } catch (e) {
      console.error(e);
    }
  },
  onError: () => {},
};

const Placeholder = () => {
  return <div>Enter some rich text...</div>;
};

export const LexicalApp = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="grid gap-y-2">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="max-h-[250px] min-h-[150px] overflow-y-auto rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" />
          }
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <div className="justify-self-end">
          <ExportPlugin />
        </div>
        {/* <TreeViewPlugin /> */}
      </div>
    </LexicalComposer>
  );
};
