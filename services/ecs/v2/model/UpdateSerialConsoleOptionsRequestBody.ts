import { UpdateSerialConsoleOptionsOption } from './UpdateSerialConsoleOptionsOption';


export class UpdateSerialConsoleOptionsRequestBody {
    private 'serial_console_options'?: UpdateSerialConsoleOptionsOption;
    public constructor() { 
    }
    public withSerialConsoleOptions(serialConsoleOptions: UpdateSerialConsoleOptionsOption): UpdateSerialConsoleOptionsRequestBody {
        this['serial_console_options'] = serialConsoleOptions;
        return this;
    }
    public set serialConsoleOptions(serialConsoleOptions: UpdateSerialConsoleOptionsOption  | undefined) {
        this['serial_console_options'] = serialConsoleOptions;
    }
    public get serialConsoleOptions(): UpdateSerialConsoleOptionsOption | undefined {
        return this['serial_console_options'];
    }
}