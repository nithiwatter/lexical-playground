import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const ExportPlugin = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      className="rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
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
