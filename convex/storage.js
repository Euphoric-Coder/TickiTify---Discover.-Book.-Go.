import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, { storageId }) => {
    return await ctx.storage.getUrl(storageId);
  },
});

export function useStorageUrl(storageId) {
  return useQuery(api.storage.getUrl, storageId ? { storageId } : "skip");
}
