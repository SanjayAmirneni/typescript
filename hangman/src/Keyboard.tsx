import styles from './Keyboard.module.css'

const keys = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

type KeyboardProps = {
    activeLetters: string[],
    disabled: boolean,
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}


export function Keyboard({activeLetters,disabled = false,inactiveLetters,addGuessedLetter}:KeyboardProps) {
    return <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem"
    }}>
          {
        keys.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
                <button
                    className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                    key={key}
                    onClick={() => addGuessedLetter(key)}
                    disabled={isActive || isInactive || disabled}
                >
                    {key}
                </button>
            );
        })
    }
    </div>
  
}