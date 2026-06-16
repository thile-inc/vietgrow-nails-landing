-- Run this once against your Neon database to create the leads table.
create table if not exists leads (
  id            bigint generated always as identity primary key,
  full_name     text        not null,
  business_name text        not null,
  phone         text        not null,
  email         text        not null,
  business_type text        not null,
  budget        text        not null,
  message       text,
  created_at    timestamptz not null default now()
);

create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx on leads (email);
