

export class DefectEvents {
    public events?: Array<DefectEvents>;
    public description?: string;
    private 'fix_suggestions'?: Array<string>;
    public line?: number;
    private 'end_line'?: number;
    private 'code_context_start_line'?: number;
    public main?: boolean;
    public path?: string;
    public tag?: string;
    private 'main_buggy_code'?: string;
    private 'code_context'?: string;
    public constructor() { 
    }
    public withEvents(events: Array<DefectEvents>): DefectEvents {
        this['events'] = events;
        return this;
    }
    public withDescription(description: string): DefectEvents {
        this['description'] = description;
        return this;
    }
    public withFixSuggestions(fixSuggestions: Array<string>): DefectEvents {
        this['fix_suggestions'] = fixSuggestions;
        return this;
    }
    public set fixSuggestions(fixSuggestions: Array<string>  | undefined) {
        this['fix_suggestions'] = fixSuggestions;
    }
    public get fixSuggestions(): Array<string> | undefined {
        return this['fix_suggestions'];
    }
    public withLine(line: number): DefectEvents {
        this['line'] = line;
        return this;
    }
    public withEndLine(endLine: number): DefectEvents {
        this['end_line'] = endLine;
        return this;
    }
    public set endLine(endLine: number  | undefined) {
        this['end_line'] = endLine;
    }
    public get endLine(): number | undefined {
        return this['end_line'];
    }
    public withCodeContextStartLine(codeContextStartLine: number): DefectEvents {
        this['code_context_start_line'] = codeContextStartLine;
        return this;
    }
    public set codeContextStartLine(codeContextStartLine: number  | undefined) {
        this['code_context_start_line'] = codeContextStartLine;
    }
    public get codeContextStartLine(): number | undefined {
        return this['code_context_start_line'];
    }
    public withMain(main: boolean): DefectEvents {
        this['main'] = main;
        return this;
    }
    public withPath(path: string): DefectEvents {
        this['path'] = path;
        return this;
    }
    public withTag(tag: string): DefectEvents {
        this['tag'] = tag;
        return this;
    }
    public withMainBuggyCode(mainBuggyCode: string): DefectEvents {
        this['main_buggy_code'] = mainBuggyCode;
        return this;
    }
    public set mainBuggyCode(mainBuggyCode: string  | undefined) {
        this['main_buggy_code'] = mainBuggyCode;
    }
    public get mainBuggyCode(): string | undefined {
        return this['main_buggy_code'];
    }
    public withCodeContext(codeContext: string): DefectEvents {
        this['code_context'] = codeContext;
        return this;
    }
    public set codeContext(codeContext: string  | undefined) {
        this['code_context'] = codeContext;
    }
    public get codeContext(): string | undefined {
        return this['code_context'];
    }
}