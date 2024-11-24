import { PaperProvider } from "react-native-paper"
export default function UIProvider({children}) {
    return (
        <>
        <PaperProvider>
            {children}
        </PaperProvider>
        </>
    )
}