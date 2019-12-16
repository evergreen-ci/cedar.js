/* tslint:disable:variable-name */

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APIPerformanceResultInfo
class APIPerformanceResultInfo {
  public project: string | null;
  public version: string | null;
  public order: number;
  public variant: string | null;
  public task_name: string | null;
  public task_id: string | null;
  public execution: number;
  public test_name: string | null;
  public trial: number;
  public parent: string | null;
  public tags: string[];
  public args: { [key: string]: number };
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APIArtifactInfo
class APIArtifactInfo {
  public type: string | null;
  public bucket: string | null;
  public prefix: string | null;
  public path: string | null;
  public format: string | null;
  public compression: string | null;
  public schema: string | null;
  public tags: string[];
  public created_at: Date | null;
  public download_url: string | null;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APIPerfRollupValue
class APIPerfRollupValue {
  public name: string | null;
  public val: any;
  public version: number;
  public user: boolean;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APIPerfRollups
class APIPerfRollups {
  public stats: APIPerfRollupValue[];
  public processed_at: Date | null;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APIPerformanceResult
class APIPerformanceResult {
  public name: string | null;
  public info: APIPerformanceResultInfo;
  public created_at: Date | null;
  public completed_at: Date | null;
  public artifacts: APIArtifactInfo[];
  public rollups: APIPerfRollups;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APILogInfo
class APILogInfo {
  public project: string | null;
  public version: string | null;
  public variant: string | null;
  public task_name: string | null;
  public task_id: string | null;
  public execution: number;
  public test_name: string | null;
  public trial: number;
  public proc_name: string | null;
  public format: string | null;
  public tags: string[];
  public args: { [key: string]: string };
  public exit_code: number;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APILogChunkInfo
class APILogChunkInfo {
  public key: string | null;
  public num_lines: number;
  public start: Date | null;
  public end: Date | null;
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APILogArtifactInfo
class APILogArtifactInfo {
  public type: string | null;
  public prefix: string | null;
  public version: number;
  public chunks: APILogChunkInfo[];
}

// struct2ts:github.com/evergreen-ci/cedar/rest/model.APILog
class APILog {
  public id: string | null;
  public info: APILogInfo;
  public created_at: Date | null;
  public completed_at: Date | null;
  public duration_secs: number;
  public artifact: APILogArtifactInfo;
}

// exports
export {
  APIPerformanceResultInfo,
  APIArtifactInfo,
  APIPerfRollupValue,
  APIPerfRollups,
  APIPerformanceResult,
  APILogChunkInfo,
  APILogArtifactInfo,
  APILog,
  APILogInfo,
};
