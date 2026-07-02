// devicon tech-icon map — returns null when no brand icon exists (→ text-only chip).
// Ported from the Blueprint design's content.js window.TECH.

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";

const MAP: Record<string, string> = {
  java: "java/java-original",
  typescript: "typescript/typescript-original",
  javascript: "javascript/javascript-original",
  python: "python/python-original",
  rust: "rust/rust-original",
  go: "go/go-original",
  spring: "spring/spring-original",
  "spring / spring boot": "spring/spring-original",
  "spring boot": "spring/spring-original",
  nestjs: "nestjs/nestjs-original",
  prisma: "prisma/prisma-original",
  "node.js": "nodejs/nodejs-original",
  nodejs: "nodejs/nodejs-original",
  "next.js": "nextjs/nextjs-original",
  react: "react/react-original",
  "react-window": "react/react-original",
  tailwind: "tailwindcss/tailwindcss-original",
  "d3.js": "d3js/d3js-original",
  vitest: "vitest/vitest-original",
  "framer motion": "framermotion/framermotion-original",
  docker: "docker/docker-original",
  kubernetes: "kubernetes/kubernetes-original",
  terraform: "terraform/terraform-original",
  jenkins: "jenkins/jenkins-original",
  linux: "linux/linux-original",
  git: "git/git-original",
  gradle: "gradle/gradle-original",
  maven: "apachemaven/apachemaven-original",
  postgresql: "postgresql/postgresql-original",
  mongodb: "mongodb/mongodb-original",
  redis: "redis/redis-original",
  pandas: "pandas/pandas-original",
  grafana: "grafana/grafana-original",
  influxdb: "influxdb/influxdb-original",
  "scikit-learn": "scikitlearn/scikitlearn-original",
  websockets: "socketio/socketio-original",
  amazonwebservices: "amazonwebservices/amazonwebservices-original",
};

const AWS_KEYS = new Set([
  "lambda", "sqs/sns", "sqs", "sns", "s3", "iot core", "aws iot core", "dynamodb", "aws ses",
]);

function key(name: string): string {
  const n = name.toLowerCase().trim();
  if (n.startsWith("aws") || AWS_KEYS.has(n)) return "amazonwebservices";
  return n;
}

// icons that are visually dark — get a lighter tile so they stay visible
const DARK = new Set([
  "next.js", "prisma", "jenkins", "amazonwebservices", "rust", "linux", "d3.js", "vitest",
]);

export function techIcon(name: string): string | null {
  const slug = MAP[key(name)];
  return slug ? `${BASE}${slug}.svg` : null;
}

export function techIsDark(name: string): boolean {
  return DARK.has(key(name));
}
