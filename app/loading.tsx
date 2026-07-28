// app/loading.tsx

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-gray-500" />
    </div>
  );
}