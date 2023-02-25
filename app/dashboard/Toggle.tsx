"use client";

type ToggleProps = {
  deletePost: () => void;
  setToggle: (toggle: boolean) => void;
};

export default function Toggle({ deletePost, setToggle }: ToggleProps) {
  return (
    <div
      onClick={(e) => setToggle(false)}
      className="fixed left-0 top-0 z-20 h-full w-full bg-black/50"
    >
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-lg bg-white p-12">
        <h3 className="text-2xl font-bold">
          Are you sure you wanted to delete this post? 🤔
        </h3>
        <h4 className="text-sm text-red-600">
          Pressing the delete button will permanently delete this post.
        </h4>
        <button
          onClick={deletePost}
          className="bg-red-600 py-2 px-4 text-sm text-white"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
