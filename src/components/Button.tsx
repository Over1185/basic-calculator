import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ onPress, title, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : theme === 'light' ? Styles.btnLight : Styles.btnDark
            }
        >
            <Text style={isBlue || isGray ? Styles.smallTextLight : theme === 'dark' ? Styles.smallTextLight : Styles.smallTextDark}>{title}</Text>
        </TouchableOpacity>
    );
}