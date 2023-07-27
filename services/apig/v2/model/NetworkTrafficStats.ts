

export class NetworkTrafficStats {
    private 'output_throughput'?: number;
    private 'input_throughput'?: number;
    public constructor() { 
    }
    public withOutputThroughput(outputThroughput: number): NetworkTrafficStats {
        this['output_throughput'] = outputThroughput;
        return this;
    }
    public set outputThroughput(outputThroughput: number  | undefined) {
        this['output_throughput'] = outputThroughput;
    }
    public get outputThroughput(): number | undefined {
        return this['output_throughput'];
    }
    public withInputThroughput(inputThroughput: number): NetworkTrafficStats {
        this['input_throughput'] = inputThroughput;
        return this;
    }
    public set inputThroughput(inputThroughput: number  | undefined) {
        this['input_throughput'] = inputThroughput;
    }
    public get inputThroughput(): number | undefined {
        return this['input_throughput'];
    }
}