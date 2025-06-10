import { useState } from "react";

export function useMyHook(initialvalue) {
    const [value, setValue] = useState(initialvalue);

    return {value, setValue}
}