import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const ExportPlugin = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      onClick={() => {
        const editorState = editor.getEditorState();
        const json = editorState.toJSON();

        console.log(json);
      }}
    >
      Export
    </button>
  );
};
