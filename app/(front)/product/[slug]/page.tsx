import React from 'react';
import data from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.product.find((x) => x.slug === params.slug);
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            🚫 Product Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Oops! The product you're looking for doesn't exist or is no longer available.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="my-4 md:my-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline">
          &larr; Back to Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Product Image */}
        <div className="md:col-span-1 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:col-span-1 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {product.rating} of {product.numReviews} reviews
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">{product.brand}</p>

          <div className="divider dark:border-gray-600"></div>

          <h2 className="text-lg font-medium text-gray-800 dark:text-white">Description</h2>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
        </div>

        {/* Product Info & Actions */}
        <div className="md:col-span-1 space-y-4">
          <div className="card bg-base-100 dark:bg-gray-700 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-800 dark:text-white">Price</span>
                <span className="text-xl text-gray-800 dark:text-white">${product.price}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-800 dark:text-white">Status</span>
                <span className={`text-lg font-semibold ${product.countInStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                </span>
              </div>
            </div>
            <div className="card-actions justify-center p-4">
              <button className="btn btn-primary w-full text-lg font-semibold rounded-lg hover:shadow-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
