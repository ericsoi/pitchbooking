import { Button } from "antd";
import { useRouter } from "next/navigation";
import { greenButtonStyle } from "@/utils/buttons";
function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // This function navigates back to the previous page in the browser history
  };

  return (
    <Button block onClick={handleBackClick} style={greenButtonStyle}>Go Back</Button>
  );
}

export default BackButton;
