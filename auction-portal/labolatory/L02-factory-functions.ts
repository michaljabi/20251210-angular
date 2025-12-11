
// Typ generyczny żeby określić przechowywaną wartość ale dopiero w momencie wywołania signal()
function signal<T>(value: T) {
    // Tak działa tzw. Factory Function
    // za każdym wywołaniem tworzy nową instancję obiektu signal, który w istocie będzie w Angular - funkcją
    return {
        set(v: T) {
            value = v;
        }
    }
    // Pamiętaj, że return {} to MARIX (a dokładniej lukier składniowy)
    // ponieważ w istocie to oznacza return new Object({});
    // czyli 
    // w JS/TS:
    // { name: '' } === new Object({name: ''}) - to ten sam zapis, tylko krócej
}


const myValue = signal(0);

myValue.set(21);

// To wyżej to naiwna implementacja więc nie działa jak funkcja:
//myValue();

// CLUE:
// Factory function w świecie funkcyjnym działa jak Klasa w świecie obiektowym.

// Typy generyczne:

const badTyping = [];

// Tutaj możemy plegać na type inferance
const inferanceTyping = [1,'a'];

const goodTyping: string[] = [];

// Najprostrzy typ generyczny to Array

const goodTyping2: Array<string> = []



