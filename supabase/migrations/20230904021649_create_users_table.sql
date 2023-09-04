create table
  public.users (
    id uuid REFERENCES auth.users,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    email text not null,
    constraint users_pkey primary key (id)
  ) tablespace pg_default;

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

create policy "Only auth user can read users"
  on users for select using (
    auth.uid() = id
  );

create policy "Only auth user can insert users"
  on users for insert with check (
    auth.uid() = id
  );

create policy "Only auth user can update users."
  on users for update using (
    auth.uid() = id
  );

create policy "Only auth user can delete users."
  on users for delete using (
    auth.uid() = id
  );
