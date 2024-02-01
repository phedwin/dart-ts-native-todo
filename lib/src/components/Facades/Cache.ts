import { arguments } from "../Types/userArguments";

export interface Cache
{
    set(args : arguments): void;
    get() : void
}