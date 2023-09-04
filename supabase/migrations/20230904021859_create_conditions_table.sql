create table
  public.conditions (
    id uuid not null default uuid_generate_v4 (),
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    comment text not null default ''::text CHECK (length(comment) <= 200),
    points integer not null default 0,
    user_id uuid REFERENCES users not NULL
  ) tablespace pg_default;

ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;

create policy "Only auth user can read conditions"
  on conditions for select using (
    auth.uid() = user_id
  );

create policy "Only auth user can insert conditions"
  on conditions for insert with check (
    auth.uid() = user_id
  );

create policy "Only auth user can update conditions."
  on conditions for update using (
    auth.uid() = user_id
  );

create policy "Only auth user can delete conditions."
  on conditions for delete using (
    auth.uid() = user_id
  );
