const sidebarSettings = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: ["docs/introduction", "docs/available-adapters", "docs/core-versions"],
    },
    {
      type: "category",
      label: "Building a dbt Project",
      collapsed: false,
      items: [
        "docs/building-a-dbt-project/projects",
        {
          type: "category",
          label: "Models",
          items: [
            "docs/building-a-dbt-project/building-models",
            "docs/building-a-dbt-project/building-models/materializations",
            "docs/building-a-dbt-project/building-models/configuring-incremental-models",
            "docs/building-a-dbt-project/building-models/using-custom-aliases",
            "docs/building-a-dbt-project/building-models/using-custom-schemas",
            "docs/building-a-dbt-project/building-models/using-custom-databases",
            "docs/building-a-dbt-project/building-models/using-variables",
          ],
        },
        "docs/building-a-dbt-project/tests",
        "docs/building-a-dbt-project/documentation",
        "docs/building-a-dbt-project/using-sources",
        "docs/building-a-dbt-project/seeds",
        "docs/building-a-dbt-project/snapshots",
        "docs/building-a-dbt-project/exposures",
        "docs/building-a-dbt-project/jinja-macros",
        "docs/building-a-dbt-project/hooks-operations",
        //"docs/building-a-dbt-project/dont-nest-your-curlies",
        //"docs/building-a-dbt-project/archival",
        "docs/building-a-dbt-project/package-management",
        "docs/building-a-dbt-project/analyses",
        "docs/building-a-dbt-project/metrics",
      ],
    },
    {
      type: "category",
      label: "Running a dbt Project",
      collapsed: false,
      items: [
        "docs/running-a-dbt-project/using-the-dbt-ide",
        "docs/running-a-dbt-project/using-the-cli",
        "docs/running-a-dbt-project/dbt-api",
        "docs/running-a-dbt-project/running-dbt-in-production",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "docs/guides/debugging-errors",
        "docs/guides/debugging-schema-names",
        "docs/guides/navigating-the-docs",
        "docs/guides/getting-help",
        "docs/guides/best-practices",
        "docs/guides/managing-environments",
        "docs/guides/writing-custom-generic-tests",
        "docs/guides/building-packages",
        "docs/guides/creating-new-materializations",
        "docs/guides/understanding-state",
        {
          type: "category",
          label: "Migration guides",
          items: [
            "docs/guides/migration-guide/upgrading-to-v1.1",
            "docs/guides/migration-guide/upgrading-to-1-0-0",
            "docs/guides/migration-guide/upgrading-to-0-21-0",
            "docs/guides/migration-guide/upgrading-to-0-20-0",
            "docs/guides/migration-guide/upgrading-to-0-19-0",
            "docs/guides/migration-guide/upgrading-to-0-18-0",
            "docs/guides/migration-guide/upgrading-to-0-17-0",
            "docs/guides/migration-guide/upgrading-to-0-16-0",
            "docs/guides/migration-guide/upgrading-to-0-15-0",
            "docs/guides/migration-guide/upgrading-to-0-14-1",
            "docs/guides/migration-guide/upgrading-to-0-14-0",
            "docs/guides/migration-guide/upgrading-to-0-13-0",
            "docs/guides/migration-guide/upgrading-to-0-12-0",
            "docs/guides/migration-guide/upgrading-to-0-11-0",
          ],
        },
        "docs/guides/videos",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "docs/contributing/contributor-license-agreements",
        "docs/contributing/building-a-new-adapter",
        "docs/contributing/slack-rules-of-the-road",
      ],
    },
    {
      type: "category",
      label: "About",
      items: ["docs/about/license", "docs/about/viewpoint"],
    },
  ],
  "dbt CLI": [
    "dbt-cli/cli-overview",
    {
      type: "category",
      label: "Installing dbt from the command line",
      items: [
        "dbt-cli/install/overview",
        "dbt-cli/install/homebrew",
        "dbt-cli/install/pip",
        "dbt-cli/install/docker",
        "dbt-cli/install/from-source",
      ],
    },
    "dbt-cli/configure-your-profile",
  ],
  "dbt Cloud": [
    {
      type: "category",
      label: "Overview",
      link: { type: 'doc', id: 'docs/dbt-cloud/cloud-overview' }, 
      items: [
        'docs/dbt-cloud/cloud-quickstart',
      ],
    },
    {
      type: "category",
      label: "dbt Cloud IDE",
      items: [
        "docs/dbt-cloud/cloud-ide/the-dbt-ide",
        "docs/dbt-cloud/cloud-ide/handling-merge-conflicts",
        "docs/dbt-cloud/cloud-ide/viewing-docs-in-the-ide",
        "docs/dbt-cloud/cloud-ide/the-ide-git-button",
      ],
    },
    {
      type: "category",
      label: "Configuring dbt Cloud",
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-configuring-repositories",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-gitlab",
        {
          type: "category",
          label: "Connecting Azure DevOps",
          link: { type: 'doc', id: 'docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-azure-devops' }, 
          items: [
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/setup-azure',
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/authenticate-azure',
          ],
        }, 
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-choosing-a-dbt-version",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-upgrading-dbt-versions",
      ],
    },
    {
      type: "category",
      label: "Using dbt Cloud",
      link: {
        type: 'generated-index',
        title: 'Using dbt Cloud',
        description: 'Learn how you can use dbt Cloud.',
        slug: '/docs/dbt-cloud',
      },
      items: [
        "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration",
        "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
        "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
        "docs/dbt-cloud/using-dbt-cloud/artifacts",
        "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
        "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name",
        "docs/dbt-cloud/using-dbt-cloud/cloud-environment-variables",
        "docs/dbt-cloud/using-dbt-cloud/cloud-notifications",
        "docs/dbt-cloud/using-dbt-cloud/cloud-dashboard-status-tiles",
        "docs/dbt-cloud/using-dbt-cloud/cloud-model-timing-tab",
        "docs/dbt-cloud/using-dbt-cloud/cloud-metrics-layer",
      ],
    },
    {
      type: "category",
      label: "Access Control",
      items: [
        "docs/dbt-cloud/access-control/access-control-overview",
        "docs/dbt-cloud/access-control/cloud-seats-and-users",
        "docs/dbt-cloud/access-control/self-service-permissions",
        "docs/dbt-cloud/access-control/enterprise-permissions",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Enterprise",
      items: [
        "docs/dbt-cloud/dbt-cloud-enterprise",
        {
          type: "category",
          label: "Single Sign On",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/sso-overview",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-saml-2.0",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory",
          ],
        },
        {
          type: "category",
          label: "Database Auth",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-snowflake-oauth",
            "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-setting-up-bigquery-oauth",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Deployments",
      items: [
        "docs/dbt-cloud/deployments/deployment-overview",
        "docs/dbt-cloud/deployments/multi-tenant-deployment",
        "docs/dbt-cloud/deployments/single-tenant-deployment",
        "docs/dbt-cloud/deployments/deployment-architecture",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud APIs",
      items: [
        "docs/dbt-cloud/dbt-cloud-api/cloud-apis",
        {
          type: "category",
          label: "Authentication",
          items: [
            "docs/dbt-cloud/dbt-cloud-api/user-tokens",
            "docs/dbt-cloud/dbt-cloud-api/service-tokens",
          ],
        },
        "docs/dbt-cloud/dbt-cloud-api/admin-cloud-api",
        {
          type: "category",
          label: "Metadata API",
          items: [
            "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-overview",
            "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-querying",
            {
              type: "category",
              label: "Schema",
              items: [
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-model",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-models",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metric",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metrics",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-source",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-sources",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seed",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seeds",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-snapshots",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-test",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-tests",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposure",
                "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposures",
            ],
            },
          ],
        },
      ],
    },
    "docs/dbt-cloud/cloud-dbt-cloud-support",
    "docs/dbt-cloud/cloud-changelog",
  ],
  reference: [
    {
      type: "category",
      label: "Project configs",
      items: [
        "reference/dbt_project.yml",
        "reference/project-configs/analysis-paths",
        "reference/project-configs/asset-paths",
        "reference/project-configs/clean-targets",
        "reference/project-configs/config-version",
        "reference/project-configs/seed-paths",
        "reference/project-configs/dispatch-config",
        "reference/project-configs/docs-paths",
        "reference/project-configs/log-path",
        "reference/project-configs/macro-paths",
        "reference/project-configs/packages-install-path",
        "reference/project-configs/name",
        "reference/project-configs/on-run-start-on-run-end",
        "reference/project-configs/profile",
        "reference/project-configs/query-comment",
        "reference/project-configs/quoting",
        "reference/project-configs/require-dbt-version",
        "reference/project-configs/snapshot-paths",
        "reference/project-configs/model-paths",
        "reference/project-configs/target-path",
        "reference/project-configs/test-paths",
        "reference/project-configs/version",
      ],
    },
    {
      type: "category",
      label: "Adapter-specific configs",
      items: [
        "reference/resource-configs/postgres-configs",
        "reference/resource-configs/bigquery-configs",
        "reference/resource-configs/redshift-configs",
        "reference/resource-configs/snowflake-configs",
        "reference/resource-configs/spark-configs",
        "reference/resource-configs/firebolt-configs",
        "reference/resource-configs/teradata-configs",
      ],
    },
    {
      type: "category",
      label: "Resource configs and properties",
      items: [
        "reference/configs-and-properties",
        {
          type: "category",
          label: "General properties",
          items: [
            "reference/resource-properties/columns",
            "reference/resource-properties/config",
            "reference/resource-properties/description",
            "reference/resource-properties/docs",
            "reference/resource-properties/quote",
            "reference/resource-properties/tests",
          ],
        },
        {
          type: "category",
          label: "General configs",
          items: [
            "reference/resource-configs/alias",
            "reference/resource-configs/database",
            "reference/resource-configs/enabled",
            "reference/resource-configs/full_refresh",
            "reference/resource-configs/persist_docs",
            "reference/resource-configs/pre-hook-post-hook",
            "reference/resource-configs/schema",
            "reference/resource-configs/tags",
            "reference/resource-configs/meta",
            "reference/advanced-config-usage",
            "reference/resource-configs/plus-prefix",
          ],
        },
        {
          type: "category",
          label: "For models",
          items: [
            "reference/model-properties",
            "reference/model-configs",
            "reference/resource-configs/materialized",
            "reference/resource-configs/sql_header",
          ],
        },
        {
          type: "category",
          label: "For seeds",
          items: [
            "reference/seed-properties",
            "reference/seed-configs",
            "reference/resource-configs/column_types",
            "reference/resource-configs/quote_columns",
          ],
        },
        {
          type: "category",
          label: "For snapshots",
          items: [
            "reference/snapshot-properties",
            "reference/snapshot-configs",
            "reference/resource-configs/check_cols",
            "reference/resource-configs/strategy",
            "reference/resource-configs/target_database",
            "reference/resource-configs/target_schema",
            "reference/resource-configs/unique_key",
            "reference/resource-configs/updated_at",
            "reference/resource-configs/invalidate_hard_deletes",
          ],
        },
        {
          type: "category",
          label: "For tests",
          items: [
            "reference/test-configs",
            "reference/resource-configs/fail_calc",
            "reference/resource-configs/limit",
            "reference/resource-configs/severity",
            "reference/resource-configs/store_failures",
            "reference/resource-configs/where",
          ],
        },
        {
          type: "category",
          label: "For sources",
          items: [
            "reference/source-properties",
            "reference/source-configs",
            "reference/resource-properties/database",
            "reference/resource-properties/external",
            "reference/resource-properties/freshness",
            "reference/resource-properties/identifier",
            "reference/resource-properties/loader",
            "reference/resource-properties/quoting",
            "reference/resource-properties/schema",
            "reference/resource-properties/overrides",
          ],
        },
        {
          type: "category",
          label: "For analyses",
          items: [
            "reference/analysis-properties",
          ],
        },
        {
          type: "category",
          label: "For exposures",
          items: [
            "reference/exposure-properties",
          ],
        },
        {
          type: "category",
          label: "For macros",
          items: [
            "reference/macro-properties",
            "reference/resource-properties/argument-type"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Commands",
      items: [
        "reference/dbt-commands",
        {
          type: "category",
          label: "Node selection",
          items: [
            "reference/node-selection/syntax",
            "reference/node-selection/graph-operators",
            "reference/node-selection/set-operators",
            "reference/node-selection/exclude",
            "reference/node-selection/methods",
            "reference/node-selection/putting-it-together",
            "reference/node-selection/yaml-selectors",
            "reference/node-selection/test-selection-examples",
            "reference/node-selection/defer",
            "reference/node-selection/state-comparison-caveats",
          ],
        },
        {
          type: "category",
          label: "List of commands",
          items: [
            "reference/commands/build",
            "reference/commands/clean",
            "reference/commands/cmd-docs",
            "reference/commands/compile",
            "reference/commands/debug",
            "reference/commands/deps",
            "reference/commands/init",
            "reference/commands/list",
            "reference/commands/parse",
            "reference/commands/rpc",
            "reference/commands/run",
            "reference/commands/run-operation",
            "reference/commands/seed",
            "reference/commands/snapshot",
            "reference/commands/source",
            "reference/commands/test",
          ],
        },
        "reference/global-cli-flags",
        "reference/global-configs",
        "reference/events-logging",
        "reference/exit-codes",
        "reference/parsing",
      ],
    },
    {
      type: "category",
      label: "Jinja Reference",
      items: [
        "reference/dbt-jinja-functions",
        {
          type: "category",
          label: "List of dbt Jinja functions",
          items: [
            "reference/dbt-jinja-functions/adapter",
            "reference/dbt-jinja-functions/as_bool",
            "reference/dbt-jinja-functions/as_native",
            "reference/dbt-jinja-functions/as_number",
            "reference/dbt-jinja-functions/as_text",
            "reference/dbt-jinja-functions/builtins",
            "reference/dbt-jinja-functions/config",
            "reference/dbt-jinja-functions/dbt_version",
            "reference/dbt-jinja-functions/debug-method",
            "reference/dbt-jinja-functions/dispatch",
            "reference/dbt-jinja-functions/doc",
            "reference/dbt-jinja-functions/env_var",
            "reference/dbt-jinja-functions/exceptions",
            "reference/dbt-jinja-functions/execute",
            "reference/dbt-jinja-functions/flags",
            "reference/dbt-jinja-functions/fromjson",
            "reference/dbt-jinja-functions/fromyaml",
            "reference/dbt-jinja-functions/graph",
            "reference/dbt-jinja-functions/invocation_id",
            "reference/dbt-jinja-functions/log",
            "reference/dbt-jinja-functions/model",
            "reference/dbt-jinja-functions/modules",
            "reference/dbt-jinja-functions/project_name",
            "reference/dbt-jinja-functions/ref",
            "reference/dbt-jinja-functions/return",
            "reference/dbt-jinja-functions/run_query",
            "reference/dbt-jinja-functions/run_started_at",
            "reference/dbt-jinja-functions/schema",
            "reference/dbt-jinja-functions/schemas",
            "reference/dbt-jinja-functions/source",
            "reference/dbt-jinja-functions/statement-blocks",
            "reference/dbt-jinja-functions/target",
            "reference/dbt-jinja-functions/this",
            "reference/dbt-jinja-functions/tojson",
            "reference/dbt-jinja-functions/toyaml",
            "reference/dbt-jinja-functions/var",
            "reference/dbt-jinja-functions/profiles-yml-context",
            "reference/dbt-jinja-functions/dbt-project-yml-context",
            "reference/dbt-jinja-functions/on-run-end-context",
          ],
        },
        "reference/dbt-classes",
      ],
    },
    {
      type: "category",
      label: "Profiles (CLI only)",
      items: [
        "reference/profiles.yml",
        "reference/warehouse-profiles/bigquery-profile",
        "reference/warehouse-profiles/postgres-profile",
        "reference/warehouse-profiles/redshift-profile",
        "reference/warehouse-profiles/snowflake-profile",
        "reference/warehouse-profiles/mssql-profile",
        "reference/warehouse-profiles/presto-profile",
        "reference/warehouse-profiles/trino-profile",
        "reference/warehouse-profiles/singlestore-profile",
        "reference/warehouse-profiles/spark-profile",
        "reference/warehouse-profiles/databricks-profile",
        "reference/warehouse-profiles/exasol-profile",
        "reference/warehouse-profiles/oracle-profile",
        "reference/warehouse-profiles/azuresynapse-profile",
        "reference/warehouse-profiles/dremio-profile",
        "reference/warehouse-profiles/clickhouse-profile",
        "reference/warehouse-profiles/materialize-profile",
        "reference/warehouse-profiles/rockset-profile",
        "reference/warehouse-profiles/firebolt-profile",
        "reference/warehouse-profiles/teradata-profile",
        "reference/warehouse-profiles/athena-profile",
        "reference/warehouse-profiles/vertica-profile",
      ],
    },
    {
      type: "category",
      label: "dbt Artifacts",
      items: [
        "reference/artifacts/dbt-artifacts",
        "reference/artifacts/manifest-json",
        "reference/artifacts/run-results-json",
        "reference/artifacts/catalog-json",
        "reference/artifacts/sources-json",
        "reference/artifacts/other-artifacts",
      ],
    },
  ],
  tutorial: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "tutorial/setting-up",
        {
          type: "category",
          label: "Create a project",
          items: [
            "tutorial/create-a-project-dbt-cloud",
            "tutorial/create-a-project-dbt-cli",
          ],
        },
        "tutorial/build-your-first-models",
        "tutorial/test-and-document-your-project",
        "tutorial/deploy-your-project",
      ],
    },
    {
      type: "category",
      label: "Leveling up",
      collapsed: false,
      items: [
        "tutorial/using-jinja",
        "tutorial/refactoring-legacy-sql"
      ],
    },
  ],
  learn: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "learn/setting-up",
        {
          type: "category",
          label: "Create a project",
          items: [
            "learn/create-a-project-dbt-cloud",
            "learn/create-a-project-dbt-cli",
          ],
        },
        "learn/build-your-first-models",
        "learn/test-and-document-your-project",
      ],
    },
  ],
};


module.exports = sidebarSettings
