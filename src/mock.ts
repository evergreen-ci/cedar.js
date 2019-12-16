import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

// prettier-ignore
const mockGetResponses: object = {
  "^.*\/perf\/\\w+$":       {
    name: "perf_by_id",
    info: {
      project: "sys-perf",
      version: "abc123",
      order: 0,
      variant: "linux-3-node-replSet",
      task_name: "service_architecture_workloads",
      task_id: "task_id",
      execution: 0,
      test_name: "service_architecture_workloads",
      trial: 0,
      parent: "",
      tags: null,
      args: null
    },
    created_at: "2019-07-26T20:01:39.000Z",
    completed_at: "2019-07-26T21:06:35.000Z",
    artifacts: null,
    rollups: {
      stats: null,
      processed_at: null,
      valid: false
    }
  },
    "^.*\/perf\/task_id\/\\w+$": [
      {
        name: "perf_by_task_id",
        info: {
          project: "sys-perf",
          version: "abc123",
          order: 0,
          variant: "linux-3-node-replSet",
          task_name: "service_architecture_workloads",
          task_id: "task_id",
          execution: 0,
          test_name: "service_architecture_workloads",
          trial: 0,
          parent: "",
          tags: null,
          args: null
        },
        created_at: "2019-07-26T20:01:39.000Z",
        completed_at: "2019-07-26T21:06:35.000Z",
        artifacts: null,
        rollups: {
          stats: null,
          processed_at: null,
          valid: false
        }
      }
    ],
    "^.*\/perf\/task_name\/\\w+$": [
      {
        name: "perf_by_task_name",
        info: {
          project: "sys-perf",
          version: "abc123",
          order: 0,
          variant: "linux-3-node-replSet",
          task_name: "service_architecture_workloads",
          task_id: "task_id",
          execution: 0,
          test_name: "service_architecture_workloads",
          trial: 0,
          parent: "",
          tags: null,
          args: null
        },
        created_at: "2019-07-26T20:01:39.000Z",
        completed_at: "2019-07-26T21:06:35.000Z",
        artifacts: null,
        rollups: {
          stats: null,
          processed_at: null,
          valid: false
        }
      }
    ],
    "^.*\/buildlogger\/\\w+$": "hello world\nthis is a demo\nwe should see these lines in this order.",
    "^.*\/buildlogger\/\\w+\/meta$": {
      id: "log_meta_by_id",
      info: {
        project: "demo",
        version: "",
        variant: "",
        task_name: "curator",
        task_id: "task1",
        execution: 0,
        test_name: "pipe",
        trial: 0,
        proc_name: "",
        format: "unknown"
      },
      created_at: "2019-10-07T23:39:17.156Z",
      completed_at: "2019-10-07T23:40:32.986Z",
      duration_secs: 75.83,
      artifact: {
        type: "s3",
        prefix: "0e33effabe6ed10d12f86aab285cc8b0fb911e22",
        version: 0,
        chunks: [
          {
            key: "1570491617230",
            num_lines: 6,
            start: "2019-10-07T23:39:20.546Z",
            end: "2019-10-07T23:40:09.866Z"
          },
          {
            key: "1570491632904",
            num_lines: 2,
            start: "2019-10-07T23:40:17.338Z",
            end: "2019-10-07T23:40:28.077Z"
          }
        ]
      }
    },
    ".*": { message: "did not match any route"}
};

export function initializeMock(): void {
  const mock = new MockAdapter(Axios);
  for (const path of Object.keys(mockGetResponses)) {
    mock.onGet(new RegExp(path)).reply(200, mockGetResponses[path]);
  }
}
