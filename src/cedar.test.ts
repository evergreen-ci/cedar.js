import * as cedar from "./cedar";
import { initializeMock } from "./mock";

beforeAll(initializeMock);

it("Cedar client is constructed correctly", () => {
  const user = "me";
  const key = "abc123";
  const serverURL = "www.example.com";
  const client = new cedar.client(serverURL, user, key);

  expect(client.username).toBe(user);
  expect(client.key).toBe(key);
  expect(client.baseURL).toBe(serverURL);
});

describe("mocks for individual routes return the correct data", () => {
  const client = new cedar.client("www.example.com", "me", "key");

  it("perfById", (done) => {
    client.perfById("id").then((resp) => {
      expect(resp.data.name).toBe("perf_by_id");
      expect(resp.config.headers["Api-User"]).toBe("me");
      expect(resp.config.headers["Api-Key"]).toBe("key");
      done();
    });
  });

  it("perfByTaskId", (done) => {
    client.perfByTaskId("id").then((resp) => {
      expect(resp.data).toHaveLength(1);
      expect(resp.data[0].name).toBe("perf_by_task_id");
      done();
    });
  });

  it("perfByTaskName", (done) => {
    client.perfByTaskName("name", "proj").then((resp) => {
      expect(resp.data).toHaveLength(1);
      expect(resp.data[0].name).toBe("perf_by_task_name");
      expect(resp.config.params.project).toBe("proj");
      done();
    });
  });

  it("buildlogsById", (done) => {
    client.buildlogsById("id").then((resp) => {
      expect(resp.data).toBe(
        "hello world\nthis is a demo\nwe should see these lines in this order."
      );
      done();
    });
  });

  it("buildlogMetadataById", (done) => {
    client.buildlogMetadataById("id").then((resp) => {
      expect(resp.data.id).toBe("log_meta_by_id");
      done();
    });
  });
});
