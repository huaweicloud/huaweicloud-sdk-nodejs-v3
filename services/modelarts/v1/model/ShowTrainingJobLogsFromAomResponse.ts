
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobLogsFromAomResponse extends SdkResponse {
    private 'start_line'?: string;
    private 'end_line'?: string;
    public lines?: number;
    public content?: string;
    public constructor() { 
        super();
    }
    public withStartLine(startLine: string): ShowTrainingJobLogsFromAomResponse {
        this['start_line'] = startLine;
        return this;
    }
    public set startLine(startLine: string  | undefined) {
        this['start_line'] = startLine;
    }
    public get startLine(): string | undefined {
        return this['start_line'];
    }
    public withEndLine(endLine: string): ShowTrainingJobLogsFromAomResponse {
        this['end_line'] = endLine;
        return this;
    }
    public set endLine(endLine: string  | undefined) {
        this['end_line'] = endLine;
    }
    public get endLine(): string | undefined {
        return this['end_line'];
    }
    public withLines(lines: number): ShowTrainingJobLogsFromAomResponse {
        this['lines'] = lines;
        return this;
    }
    public withContent(content: string): ShowTrainingJobLogsFromAomResponse {
        this['content'] = content;
        return this;
    }
}