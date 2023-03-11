import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TreeViewPlugin } from "./plugins/TreeViewPlugin";
import theme from "./theme";

const initialConfig = { namespace: "MyEditor", theme, onError: () => {} };

const Placeholder = () => {
  return <div>Enter some rich text...</div>;
};

export const LexicalApp = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div>Below is a lexical text</div>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <TreeViewPlugin />
    </LexicalComposer>
  );
};
