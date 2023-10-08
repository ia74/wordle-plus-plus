import { WPPGlobal } from "../WPPGlobal";
import { ParsedError } from "../errors/ParsedError";
import ErrorParser from "../errors/ErrorParser";

enum LogLevels {
    log = 'Log',
    error = 'Error',
    warning = 'Warning',
    success = 'Success',
    init = 'Initialization'
}
class Logger {
    level: LogLevels;
    module: string;
    constructor(level: LogLevels = LogLevels.log, module: string = 'W++') {
        this.level = level;
        this.module = module;
    }
    public log(message: string) {
        if (typeof WPPGlobal.IsSilent === "number") return;
        console.log(`[${this.module} ${this.level}] ` + message)
    }
    public errlog(wpferror: string, error: any) {
        let errorParsed: ParsedError = ErrorParser(wpferror);
        console.log('ERR ' + wpferror + " | " + errorParsed + ' | ' + error);
    }
}
export default { Logger, LogLevels }