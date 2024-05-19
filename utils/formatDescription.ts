export default function formatDescription(description: string) {
   return description
      .replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replaceAll(/\*(.*?)\*/g, "<em>$1</em>")
      .replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a target="_blank" href="$2">$1</a>');
}